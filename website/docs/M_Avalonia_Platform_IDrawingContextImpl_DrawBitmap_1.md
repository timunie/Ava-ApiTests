# DrawBitmap(IBitmapImpl, Double, Rect, Rect) Method


Draws a bitmap image.



## Definition
**Namespace:** <a href="N_Avalonia_Platform">Avalonia.Platform</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
void DrawBitmap(
	IBitmapImpl source,
	double opacity,
	Rect sourceRect,
	Rect destRect
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Sub DrawBitmap ( 
	source As IBitmapImpl,
	opacity As Double,
	sourceRect As Rect,
	destRect As Rect
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract DrawBitmap : 
        source : IBitmapImpl * 
        opacity : float * 
        sourceRect : Rect * 
        destRect : Rect -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Platform/IDrawingContextImpl.cs" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Platform_IBitmapImpl">IBitmapImpl</a></dt><dd>The bitmap image.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a></dt><dd>The opacity to draw with.</dd><dt>  <a href="T_Avalonia_Rect">Rect</a></dt><dd>The rect in the image to draw.</dd><dt>  <a href="T_Avalonia_Rect">Rect</a></dt><dd>The rect in the output to draw to.</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Platform_IDrawingContextImpl">IDrawingContextImpl Interface</a>  
<a href="Overload_Avalonia_Platform_IDrawingContextImpl_DrawBitmap">DrawBitmap Overload</a>  
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  
