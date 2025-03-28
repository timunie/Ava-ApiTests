# Screen Constructor


Initializes a new instance of the <a href="T_Avalonia_Platform_Screen">Screen</a> class.



## Definition
**Namespace:** <a href="N_Avalonia_Platform">Avalonia.Platform</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
[UnstableAttribute("This API may be removed in Avalonia 12. If you depend on this API, please open an issue with details of your use-case.")]
public Screen(
	double scaling,
	PixelRect bounds,
	PixelRect workingArea,
	bool isPrimary
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
<UnstableAttribute("This API may be removed in Avalonia 12. If you depend on this API, please open an issue with details of your use-case.")>
Public Sub New ( 
	scaling As Double,
	bounds As PixelRect,
	workingArea As PixelRect,
	isPrimary As Boolean
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<UnstableAttribute("This API may be removed in Avalonia 12. If you depend on this API, please open an issue with details of your use-case.")>]
new : 
        scaling : float * 
        bounds : PixelRect * 
        workingArea : PixelRect * 
        isPrimary : bool -> Screen
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Platform/Screen.cs#L67" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a></dt><dd>The scaling factor applied to the screen by the operating system.</dd><dt>  <a href="T_Avalonia_PixelRect">PixelRect</a></dt><dd>The overall pixel-size of the screen.</dd><dt>  <a href="T_Avalonia_PixelRect">PixelRect</a></dt><dd>The actual working-area pixel-size of the screen.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a></dt><dd>Whether the screen is the primary one.</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Platform_Screen">Screen Class</a>  
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  

