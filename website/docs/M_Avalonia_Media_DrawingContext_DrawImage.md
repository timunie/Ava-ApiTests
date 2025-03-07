# DrawImage(IImage, Rect, Rect) Method


Draws an image.



## Definition
**Namespace:** <a href="N_Avalonia_Media">Avalonia.Media</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public virtual void DrawImage(
	IImage source,
	Rect sourceRect,
	Rect destRect
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Overridable Sub DrawImage ( 
	source As IImage,
	sourceRect As Rect,
	destRect As Rect
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract DrawImage : 
        source : IImage * 
        sourceRect : Rect * 
        destRect : Rect -> unit 
override DrawImage : 
        source : IImage * 
        sourceRect : Rect * 
        destRect : Rect -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/DrawingContext.cs#L57" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Media_IImage">IImage</a></dt><dd>The image.</dd><dt>  <a href="T_Avalonia_Rect">Rect</a></dt><dd>The rect in the image to draw.</dd><dt>  <a href="T_Avalonia_Rect">Rect</a></dt><dd>The rect in the output to draw to.</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Media_DrawingContext">DrawingContext Class</a>  
<a href="Overload_Avalonia_Media_DrawingContext_DrawImage">DrawImage Overload</a>  
<a href="N_Avalonia_Media">Avalonia.Media Namespace</a>  
