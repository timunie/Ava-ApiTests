# IsSuitableForDirectRendering Property


Indicates that the render target can be used without CreateLayer It's currently not true for every render target, since with OpenGL rendering we often use framebuffers without a stencil attachment that is required for clipping with Skia



## Definition
**Namespace:** <a href="N_Avalonia_Platform">Avalonia.Platform</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public bool IsSuitableForDirectRendering \{
	get;
 init; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Property IsSuitableForDirectRendering As Boolean
		Get
	Set
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member IsSuitableForDirectRendering : bool with 
		get, set
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Platform/RenderTargetProperties.cs#L22" title="View the source code">View Source</a>



#### Property Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>

## See Also


#### Reference
<a href="T_Avalonia_Platform_RenderTargetProperties">RenderTargetProperties Structure</a>  
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  
