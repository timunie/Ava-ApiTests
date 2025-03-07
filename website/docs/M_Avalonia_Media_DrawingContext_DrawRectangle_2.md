# DrawRectangle(IPen, Rect, Single) Method


Draws the outline of a rectangle.



## Definition
**Namespace:** <a href="N_Avalonia_Media">Avalonia.Media</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public void DrawRectangle(
	IPen pen,
	Rect rect,
	float cornerRadius = 0f
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub DrawRectangle ( 
	pen As IPen,
	rect As Rect,
	Optional cornerRadius As Single = 0F
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member DrawRectangle : 
        pen : IPen * 
        rect : Rect * 
        ?cornerRadius : float32 
(* Defaults:
        let _cornerRadius = defaultArg cornerRadius 0f
*)
-> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/DrawingContext.cs#L175" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Media_IPen">IPen</a></dt><dd>The pen.</dd><dt>  <a href="T_Avalonia_Rect">Rect</a></dt><dd>The rectangle bounds.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">Single</a>  (Optional)</dt><dd>The corner radius.</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Media_DrawingContext">DrawingContext Class</a>  
<a href="Overload_Avalonia_Media_DrawingContext_DrawRectangle">DrawRectangle Overload</a>  
<a href="N_Avalonia_Media">Avalonia.Media Namespace</a>  
