# UseRetainedFramebuffer Property


Retain window framebuffer contents if using CPU rendering mode. This will keep an offscreen bitmap for each window with contents of the previous frame While improving performance by saving a blit, it will increase memory consumption if you have many windows



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.X11 (in Avalonia.X11.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public bool? UseRetainedFramebuffer { get; set; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Property UseRetainedFramebuffer As Boolean?
	Get
	Set
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member UseRetainedFramebuffer : Nullable<bool> with get, set
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.X11/X11Platform.cs#L373" title="View the source code">View Source</a>



#### Property Value
<a href="https://learn.microsoft.com/dotnet/api/system.nullable-1" target="_blank" rel="noopener noreferrer">Nullable</a>(<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>)

## See Also


#### Reference
<a href="T_Avalonia_X11PlatformOptions">X11PlatformOptions Class</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  

