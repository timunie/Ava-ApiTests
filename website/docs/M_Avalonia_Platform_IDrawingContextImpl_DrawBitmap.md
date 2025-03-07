# DrawBitmap(IBitmapImpl, IBrush, Rect, Rect) Method


Draws a bitmap image.



## Definition
**Namespace:** <a href="N_Avalonia_Platform">Avalonia.Platform</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
void DrawBitmap(
	IBitmapImpl source,
	IBrush opacityMask,
	Rect opacityMaskRect,
	Rect destRect
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Sub DrawBitmap ( 
	source As IBitmapImpl,
	opacityMask As IBrush,
	opacityMaskRect As Rect,
	destRect As Rect
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract DrawBitmap : 
        source : IBitmapImpl * 
        opacityMask : IBrush * 
        opacityMaskRect : Rect * 
        destRect : Rect -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Platform/IDrawingContextImpl.cs" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Platform_IBitmapImpl">IBitmapImpl</a></dt><dd>The bitmap image.</dd><dt>  <a href="T_Avalonia_Media_IBrush">IBrush</a></dt><dd>The opacity mask to draw with.</dd><dt>  <a href="T_Avalonia_Rect">Rect</a></dt><dd>The destination rect for the opacity mask.</dd><dt>  <a href="T_Avalonia_Rect">Rect</a></dt><dd>The rect in the output to draw to.</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Platform_IDrawingContextImpl">IDrawingContextImpl Interface</a>  
<a href="Overload_Avalonia_Platform_IDrawingContextImpl_DrawBitmap">DrawBitmap Overload</a>  
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  
