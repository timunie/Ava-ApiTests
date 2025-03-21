# FillRectangle Method


Draws a filled rectangle.



## Definition
**Namespace:** <a href="N_Avalonia_Media">Avalonia.Media</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public void FillRectangle(
	IImmutableBrush brush,
	Rect rect,
	float cornerRadius = 0f
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub FillRectangle ( 
	brush As IImmutableBrush,
	rect As Rect,
	Optional cornerRadius As Single = 0F
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member FillRectangle : 
        brush : IImmutableBrush * 
        rect : Rect * 
        ?cornerRadius : float32 
(* Defaults:
        let _cornerRadius = defaultArg cornerRadius 0f
*)
-> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/ImmediateDrawingContext.cs#L203" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Media_IImmutableBrush">IImmutableBrush</a></dt><dd>The brush.</dd><dt>  <a href="T_Avalonia_Rect">Rect</a></dt><dd>The rectangle bounds.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">Single</a>  (Optional)</dt><dd>The corner radius.</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Media_ImmediateDrawingContext">ImmediateDrawingContext Class</a>  
<a href="N_Avalonia_Media">Avalonia.Media Namespace</a>  

