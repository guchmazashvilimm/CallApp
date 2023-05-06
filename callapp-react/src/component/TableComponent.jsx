// import { Table } from "antd";
import "./TableComponent.css";
import { useState } from "react";
import { Link } from 'react-router-dom';
import { Button, Table, Modal, Input, Select, Form } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useForm } from "antd/lib/form/Form";
import PieChartPage from "./Chart";


import { useEffect } from "react";
import { Pie } from "@ant-design/charts";
const TableComponent = (props)=>{
    const { Option } = Select;
    const [form] = useForm();


    const [isEditing, setIsEditing] = useState(false);
    const [editingUser, setEditingUser] = useState(null);
    const [dataSource,setDataSource] = useState([]);
    const [isAdding, setIsAdding] = useState(false);


    useEffect(() => {
        const newData = props.userdata.map((item) => {
          return {
            id: item.id,
            name: item.name,
            email: item.email,
            gender: item.gender,
            phone: item.phone,
            address: item.address ? item.address.city : ''

            
          };
        });
        setDataSource(newData);
      }, [props.userdata]);
      const columns = [
        {
          key: "id",
          title: "ID",
          dataIndex: "id",
        },
        {
          key: "name",
          title: "Name",
          dataIndex: "name",
        },
        {
          key: "email",
          title: "Email",
          dataIndex: "email",
        },
        {
          key: "gender",
          title: "Gender",
          dataIndex: "gender",
        },
        {
          key: "address",
          title: "Address/City",
          dataIndex: "address",
        },
        {
          key: "phone",
          title: "Phone",
          dataIndex: "phone",
        },
        {
            key: "Actions",
            title: "Actions",
            render: (record) => {
              return (
                <>
                  <EditOutlined
                    onClick={() => {
                      onEditUser(record);
                    }}
                  />
                  <DeleteOutlined
                    onClick={() => {
                      onDeleteUser(record);
                    }}
                    style={{ color: "red", marginLeft: 12 }}
                  />
                </>
              );
            },
          },
      ];
      const onAddUser = (values) => {
        const { name, email, gender, address, phone } = values;
        const newID = dataSource.length +1; 
        const newUser = {
          id: newID,
          name,
          email,
          gender,
          address,
          phone,
        };
        setDataSource((prevDataSource) => [...prevDataSource, newUser]);
      };
      

      const onDeleteUser = (record) => {
        Modal.confirm({
          title: "Are you sure, you want to delete this user record?",
          okText: "Yes",
          okType: "danger",
          onOk: () => {
            const newDataSource = dataSource.filter((user) => user.id !== record.id);
            setDataSource(newDataSource);
            
          },
        });
      };
      const onEditUser = (record) => {
        setIsEditing(true);
        setEditingUser({...record});
      };
      
      const resetEditing = () => {
        setIsEditing(false);
        setEditingUser(null);
      };

    
    return (
        <>
        <div className="table">
        <Button  className="add-btn" onClick={() => setIsAdding(true)}>Add a new User</Button>
        <Button  className="chart-btn" onClick={() => {<PieChartPage/>}}><Link to="/piechart">See the Pie chart</Link></Button>
        <Modal
        title="Add User"
        visible={isAdding}
        okText="Add"
        onCancel={() => setIsAdding(false)}
        onOk={() => {
            form.validateFields().then((values) => {
            form.resetFields();
            setIsAdding(false);
            onAddUser(values);
            });
        }}
        >
        <Form form={form}>
            <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: "Please enter a name" }]}
            >
            <Input />
            </Form.Item>
            <Form.Item
            name="email"
            label="Email"
            rules={[
                { required: true, message: "Please enter an email address" },
                { type: "email", message: "Please enter a valid email address" },
            ]}
            >
            <Input />
            </Form.Item>
            <Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
            <Select>
                <Option value="male">Male</Option>
                <Option value="female">Female</Option>
            </Select>
            </Form.Item>
            <Form.Item
            name="address"
            label="Address"
            rules={[{ required: true, message: "Please enter an address" }]}
            >
            <Input />
            </Form.Item>
            <Form.Item
            name="phone"
            label="Phone"
            rules={[{ required: true, message: "Please enter a phone number" }]}
            >
            <Input />
            </Form.Item>
        </Form>
        </Modal>
        <Table 
        columns={columns}
        dataSource={dataSource}></Table>
               <Modal
          title="Edit User"
          visible={isEditing}
          okText="Save"
          onCancel={() => {
            resetEditing();
          }}
          onOk={() => {
            setDataSource((pre) => {
                return pre.map((user) => {
                    if (user.id === editingUser.id) {
                      return editingUser;
                    } else {
                      return user;
                    }
                  }).map((user) => {
                    if (user.id === editingUser.id) {
                      return editingUser;
                    } else {
                      return user;
                    }
                  });
                  
            }
            );
            resetEditing();
          }}
        >
          <Input
            value={editingUser?.name}
            onChange={(e) => {
              setEditingUser((pre) => {
                return { ...pre, name: e.target.value };
              });
            }}
          />
          <Input
            value={editingUser?.email}
            onChange={(e) => {
              setEditingUser((pre) => {
                return { ...pre, email: e.target.value };
              });
            }}
          />
          <Select
                value={editingUser?.gender}
                onChange={(value) => {
                    setEditingUser((pre) => {
                    return { ...pre, gender: value };
                    });
                }}
                >
                <Option value="male">Male</Option>
                <Option value="female">Female</Option>
            </Select>

          <Input
            value={editingUser?.address}
            onChange={(e) => {
              setEditingUser((pre) => {
                return { ...pre, address: e.target.value };
              });
            }}
          />
           <Input
            value={editingUser?.phone}
            onChange={(e) => {
              setEditingUser((pre) => {
                return { ...pre, phone: e.target.value };
              });
            }}
          />
        </Modal>
        </div>
       
        </>
    )
}

export default TableComponent;