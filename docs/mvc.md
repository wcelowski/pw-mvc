@startuml
actor User as User

User -> View: addItem
View -> Controller: addItemEvent
group addItemListener
Controller -> Model: addItem
Controller -> View: render(model)
end

@enduml