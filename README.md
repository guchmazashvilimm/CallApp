# CallApp
პროექტში გვაქვს ორი ფოლდერი ერთი node.js მხარე რომელშიც გვაქვს ჯეისონის ფაილი და კოდი ეშვება localhost:5000ზე,
თუმცა cors მოდულის მეშვეობით წვდომა აქვს localhost:3000ზე, რომელზეც არის პროექტში არსებული მეორე ფოლდერი ანუ რეაქთის მხარე.
რეაქთის მხარეს გვაქვს ant design-ის Table componentი რომელშიც მოგვაქვს ნოუდის მხარეს არსებული ჯეისონის ინფორმაცია შესაბამის ველებში.
Tableს აქვს დაედითებისა და წაშლის ფუნქცია.
დაედითების დროს გამოდის ant designის მოდალი რომელშიც შესაბამისი rowს ინფორმაცია გამოდის და საშუალებას გვაძლევს ჩავასწოროთ და შევინახოთ დაედითებული ინფორმაცია.
წაშლის ღილაკის მეშვეობით ამოიშლება შესაბამისი სტრიქონი.
(gender არის select ტიპის)ასევე არის იუზერის დამატების ფუნქცია რომელზე დაჭერის დროსაც ასევე ჩნდება მოდალი, რომელსაც აქვს შესაბამისი ინფუთ ველები.
(თუ ცდით იუზერის დამატებას გადაამოწმეთ ბოლო გვერდი რადგან ბოლოში ემატება ახალი იუზერი).
pie chartს რაც შეეხება,ღილაკზე დაჭერით გადავდივართ ახალ კომპონენტზე,თუმცა სამწუხაროდ,pie chartზე არსბეული ინფორმაცია
(პროცენტებთან დაკავშირებით)მაქვს სტატიკურად დაწერილი რადგან ვერ შევძელი დამესრულებინა კონკრეტული კოდი,
თუმცა შესაბამის კომპონენტში დაკომენტარებული მაქვს ის კოდი რომლითაც ვცდილობდი დინამიური ყოფილიყო ქალაქების pie chart.

