# ThreadSafePropertyChanged Field


Represents PropertyChanged event from <a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.inotifypropertychanged" target="_blank" rel="noopener noreferrer">INotifyPropertyChanged</a> with auto-dispatching to the UI thread



## Definition
**Namespace:** <a href="N_Avalonia_Utilities">Avalonia.Utilities</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static readonly WeakEvent<INotifyPropertyChanged, PropertyChangedEventArgs> ThreadSafePropertyChanged
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared ReadOnly ThreadSafePropertyChanged As WeakEvent(Of INotifyPropertyChanged, PropertyChangedEventArgs)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static val ThreadSafePropertyChanged: WeakEvent<INotifyPropertyChanged, PropertyChangedEventArgs>
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Utilities/WeakEvents.cs" title="View the source code">View Source</a>



#### Field Value
<a href="T_Avalonia_Utilities_WeakEvent_2">WeakEvent</a>(<a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.inotifypropertychanged" target="_blank" rel="noopener noreferrer">INotifyPropertyChanged</a>, <a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.propertychangedeventargs" target="_blank" rel="noopener noreferrer">PropertyChangedEventArgs</a>)

## See Also


#### Reference
<a href="T_Avalonia_Utilities_WeakEvents">WeakEvents Class</a>  
<a href="N_Avalonia_Utilities">Avalonia.Utilities Namespace</a>  

