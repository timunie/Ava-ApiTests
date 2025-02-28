import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# PropertyChanged Event


Occurs when a property value changes.



## Definition
**Namespace:** <a href="N_TestProject">TestProject</a>  
**Assembly:** TestProject (in TestProject.exe) Version: 1.0.0+ed74aaa27d13e7636b8d00b6a3f7fb9291dc0d72

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public event PropertyChangedEventHandler PropertyChanged
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Event PropertyChanged As PropertyChangedEventHandler
```
</TabItem>
<TabItem value="ManagedCPlusPlus" label="ManagedCPlusPlus">
```ManagedCPlusPlus
public:
virtual  event PropertyChangedEventHandler^ PropertyChanged {
	void add (PropertyChangedEventHandler^ value);
	void remove (PropertyChangedEventHandler^ value);
}
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract PropertyChanged : IEvent<PropertyChangedEventHandler,
    PropertyChangedEventArgs>
override PropertyChanged : IEvent<PropertyChangedEventHandler,
    PropertyChangedEventArgs>
```
</TabItem>
</Tabs>



#### Value
<a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.propertychangedeventhandler" target="_blank" rel="noopener noreferrer">PropertyChangedEventHandler</a>

#### Implements
<a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.inotifypropertychanged.propertychanged" target="_blank" rel="noopener noreferrer">INotifyPropertyChanged.PropertyChanged</a>  


## See Also


#### Reference
<a href="T_TestProject_TestClass1">TestClass1 Class</a>  
<a href="N_TestProject">TestProject Namespace</a>  
