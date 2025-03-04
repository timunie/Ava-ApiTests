import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# PopupHostChanged Event


Raised when the popup host changes.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Diagnostics">Avalonia.Controls.Diagnostics</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
event Action<IPopupHost> PopupHostChanged
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Event PopupHostChanged As Action(Of IPopupHost)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract PopupHostChanged : IEvent<Action<IPopupHost>,
    EventArgs>
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/srcAvalonia.Controls/Diagnostics/IPopupHostProvider.cs" title="View the source code">View Source</a>



#### Value
<a href="https://learn.microsoft.com/dotnet/api/system.action-1" target="_blank" rel="noopener noreferrer">Action</a>(<a href="T_Avalonia_Controls_Primitives_IPopupHost">IPopupHost</a>)

## See Also


#### Reference
<a href="T_Avalonia_Controls_Diagnostics_IPopupHostProvider">IPopupHostProvider Interface</a>  
<a href="N_Avalonia_Controls_Diagnostics">Avalonia.Controls.Diagnostics Namespace</a>  
