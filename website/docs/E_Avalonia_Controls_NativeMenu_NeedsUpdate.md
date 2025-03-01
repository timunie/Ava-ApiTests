import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# NeedsUpdate Event


Raised when the menu requests an update.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public event EventHandler<EventArgs> NeedsUpdate
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Event NeedsUpdate As EventHandler(Of EventArgs)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member NeedsUpdate : IEvent<EventHandler<EventArgs>,
    EventArgs>
```
</TabItem>
</Tabs>



#### Value
<a href="https://learn.microsoft.com/dotnet/api/system.eventhandler-1" target="_blank" rel="noopener noreferrer">EventHandler</a>(<a href="https://learn.microsoft.com/dotnet/api/system.eventargs" target="_blank" rel="noopener noreferrer">EventArgs</a>)Use this event to add, remove or modify menu items before a menu is shown or a hotkey is pressed.

## See Also


#### Reference
<a href="T_Avalonia_Controls_NativeMenu">NativeMenu Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
