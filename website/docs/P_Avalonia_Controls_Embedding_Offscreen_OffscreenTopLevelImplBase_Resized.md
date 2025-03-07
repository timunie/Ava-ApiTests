# Resized Property




## Definition
**Namespace:** <a href="N_Avalonia_Controls_Embedding_Offscreen">Avalonia.Controls.Embedding.Offscreen</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public Action<Size, WindowResizeReason>? Resized \{ get; set; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Property Resized As Action(Of Size, WindowResizeReason)
	Get
	Set
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract Resized : Action<Size, WindowResizeReason> with get, set
override Resized : Action<Size, WindowResizeReason> with get, set
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Embedding/Offscreen/OffscreenTopLevelImpl.cs#L60" title="View the source code">View Source</a>



#### Property Value
<a href="https://learn.microsoft.com/dotnet/api/system.action-2" target="_blank" rel="noopener noreferrer">Action</a>(<a href="T_Avalonia_Size">Size</a>, <a href="T_Avalonia_Controls_WindowResizeReason">WindowResizeReason</a>)

#### Implements
<a href="P_Avalonia_Platform_ITopLevelImpl_Resized">ITopLevelImpl.Resized</a>  


## See Also


#### Reference
<a href="T_Avalonia_Controls_Embedding_Offscreen_OffscreenTopLevelImplBase">OffscreenTopLevelImplBase Class</a>  
<a href="N_Avalonia_Controls_Embedding_Offscreen">Avalonia.Controls.Embedding.Offscreen Namespace</a>  
