import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# SafeAreaChanged Event




## Definition
**Namespace:** <a href="N_Avalonia_Controls_Platform">Avalonia.Controls.Platform</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public event EventHandler<SafeAreaChangedArgs> SafeAreaChanged
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Event SafeAreaChanged As EventHandler(Of SafeAreaChangedArgs)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract SafeAreaChanged : IEvent<EventHandler<SafeAreaChangedArgs>,
    SafeAreaChangedArgs>
override SafeAreaChanged : IEvent<EventHandler<SafeAreaChangedArgs>,
    SafeAreaChangedArgs>
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/srcAvalonia.Controls/Platform/IInsetsManager.cs" title="View the source code">View Source</a>



#### Value
<a href="https://learn.microsoft.com/dotnet/api/system.eventhandler-1" target="_blank" rel="noopener noreferrer">EventHandler</a>(<a href="T_Avalonia_Controls_Platform_SafeAreaChangedArgs">SafeAreaChangedArgs</a>)

#### Implements
<a href="E_Avalonia_Controls_Platform_IInsetsManager_SafeAreaChanged">IInsetsManager.SafeAreaChanged</a>  


## See Also


#### Reference
<a href="T_Avalonia_Controls_Platform_InsetsManagerBase">InsetsManagerBase Class</a>  
<a href="N_Avalonia_Controls_Platform">Avalonia.Controls.Platform Namespace</a>  
