# CreateDrawingContext(Boolean) Method


Creates a <a href="T_Avalonia_Media_DrawingContext">DrawingContext</a> for drawing to the <a href="T_Avalonia_Media_Imaging_RenderTargetBitmap">RenderTargetBitmap</a>.



## Definition
**Namespace:** <a href="N_Avalonia_Media_Imaging">Avalonia.Media.Imaging</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public DrawingContext CreateDrawingContext(
	bool clear
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function CreateDrawingContext ( 
	clear As Boolean
) As DrawingContext
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member CreateDrawingContext : 
        clear : bool -> DrawingContext 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/Imaging/RenderTargetBitmap.cs#L79" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a></dt><dd>If true, clears the current image data to transparent, if false, leaves the image data unchanged.</dd></dl>

#### Return Value
<a href="T_Avalonia_Media_DrawingContext">DrawingContext</a>  
The drawing context.

## See Also


#### Reference
<a href="T_Avalonia_Media_Imaging_RenderTargetBitmap">RenderTargetBitmap Class</a>  
<a href="Overload_Avalonia_Media_Imaging_RenderTargetBitmap_CreateDrawingContext">CreateDrawingContext Overload</a>  
<a href="N_Avalonia_Media_Imaging">Avalonia.Media.Imaging Namespace</a>  
