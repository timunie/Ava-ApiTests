# RetainsPreviousFrameContents Property


Indicates that render target contents are preserved between CreateDrawingContext calls. Notable examples are retained CPU-memory framebuffers and swapchains with DXGI_SWAP_EFFECT_SEQUENTIAL/DXGI_SWAP_EFFECT_FLIP_SEQUENTIAL



## Definition
**Namespace:** <a href="N_Avalonia_Platform">Avalonia.Platform</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public bool RetainsPreviousFrameContents \{
	get;
 init; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Property RetainsPreviousFrameContents As Boolean
		Get
	Set
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member RetainsPreviousFrameContents : bool with 
		get, set
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Platform/RenderTargetProperties.cs#L15" title="View the source code">View Source</a>



#### Property Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>

## See Also


#### Reference
<a href="T_Avalonia_Platform_RenderTargetProperties">RenderTargetProperties Structure</a>  
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  
