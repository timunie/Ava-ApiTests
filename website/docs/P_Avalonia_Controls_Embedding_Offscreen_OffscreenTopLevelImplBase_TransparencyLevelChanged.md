import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# TransparencyLevelChanged Property




## Definition
**Namespace:** <a href="N_Avalonia_Controls_Embedding_Offscreen">Avalonia.Controls.Embedding.Offscreen</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public Action<WindowTransparencyLevel>? TransparencyLevelChanged { get; set; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Property TransparencyLevelChanged As Action(Of WindowTransparencyLevel)
	Get
	Set
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract TransparencyLevelChanged : Action<WindowTransparencyLevel> with get, set
override TransparencyLevelChanged : Action<WindowTransparencyLevel> with get, set
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/srcAvalonia.Controls/Embedding/Offscreen/OffscreenTopLevelImpl.cs#L63" title="View the source code">View Source</a>



#### Property Value
<a href="https://learn.microsoft.com/dotnet/api/system.action-1" target="_blank" rel="noopener noreferrer">Action</a>(<a href="T_Avalonia_Controls_WindowTransparencyLevel">WindowTransparencyLevel</a>)

#### Implements
<a href="P_Avalonia_Platform_ITopLevelImpl_TransparencyLevelChanged">ITopLevelImpl.TransparencyLevelChanged</a>  


## See Also


#### Reference
<a href="T_Avalonia_Controls_Embedding_Offscreen_OffscreenTopLevelImplBase">OffscreenTopLevelImplBase Class</a>  
<a href="N_Avalonia_Controls_Embedding_Offscreen">Avalonia.Controls.Embedding.Offscreen Namespace</a>  
