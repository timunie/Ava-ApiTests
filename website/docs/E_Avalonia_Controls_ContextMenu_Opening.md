import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# Opening Event


Occurs when the value of the IsOpen property is changing from false to true.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public event CancelEventHandler Opening
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Event Opening As CancelEventHandler
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member Opening : IEvent<CancelEventHandler,
    CancelEventArgs>
```
</TabItem>
</Tabs>



#### Value
<a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.canceleventhandler" target="_blank" rel="noopener noreferrer">CancelEventHandler</a>

## See Also


#### Reference
<a href="T_Avalonia_Controls_ContextMenu">ContextMenu Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
