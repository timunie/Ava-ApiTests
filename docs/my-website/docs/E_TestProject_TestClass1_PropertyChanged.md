# PropertyChanged Event


Occurs when a property value changes.



## Definition
**Namespace:** <a href="N_TestProject">TestProject</a>  
**Assembly:** TestProject (in TestProject.exe) Version: 1.0.0+f3dbbd8a6d722d5933e21427a5e2458be1dced06

**C#**
``` C#
public event PropertyChangedEventHandler PropertyChanged
```
**VB**
``` VB
Public Event PropertyChanged As PropertyChangedEventHandler
```
**C++**
``` C++
public:
virtual  event PropertyChangedEventHandler^ PropertyChanged {
	void add (PropertyChangedEventHandler^ value);
	void remove (PropertyChangedEventHandler^ value);
}
```
**F#**
``` F#
abstract PropertyChanged : IEvent<PropertyChangedEventHandler,
    PropertyChangedEventArgs>
override PropertyChanged : IEvent<PropertyChangedEventHandler,
    PropertyChangedEventArgs>
```



#### Value
<a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.propertychangedeventhandler" target="_blank" rel="noopener noreferrer">PropertyChangedEventHandler</a>

#### Implements
<a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.inotifypropertychanged.propertychanged" target="_blank" rel="noopener noreferrer">INotifyPropertyChanged.PropertyChanged</a>  


## See Also


#### Reference
<a href="T_TestProject_TestClass1">TestClass1 Class</a>  
<a href="N_TestProject">TestProject Namespace</a>  
