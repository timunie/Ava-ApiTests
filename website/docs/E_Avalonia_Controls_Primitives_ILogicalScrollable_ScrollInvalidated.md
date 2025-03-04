import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# ScrollInvalidated Event


Raised when the scroll is invalidated.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Primitives">Avalonia.Controls.Primitives</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
event EventHandler ScrollInvalidated
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Event ScrollInvalidated As EventHandler
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract ScrollInvalidated : IEvent<EventHandler,
    EventArgs>
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/srcAvalonia.Controls/Primitives/ILogicalScrollable.cs" title="View the source code">View Source</a>



#### Value
<a href="https://learn.microsoft.com/dotnet/api/system.eventhandler" target="_blank" rel="noopener noreferrer">EventHandler</a>

## 
This event notifies an attached <a href="T_Avalonia_Controls_ScrollViewer">ScrollViewer</a> of a change in one of the scroll properties.

## See Also


#### Reference
<a href="T_Avalonia_Controls_Primitives_ILogicalScrollable">ILogicalScrollable Interface</a>  
<a href="N_Avalonia_Controls_Primitives">Avalonia.Controls.Primitives Namespace</a>  
