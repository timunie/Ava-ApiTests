# DrawRectangleCore Method




## Definition
**Namespace:** <a href="N_Avalonia_Media">Avalonia.Media</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected abstract void DrawRectangleCore(
	IBrush? brush,
	IPen? pen,
	RoundedRect rrect,
	BoxShadows boxShadows = default
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Protected MustOverride Sub DrawRectangleCore ( 
	brush As IBrush,
	pen As IPen,
	rrect As RoundedRect,
	Optional boxShadows As BoxShadows = Nothing
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract DrawRectangleCore : 
        brush : IBrush * 
        pen : IPen * 
        rrect : RoundedRect * 
        ?boxShadows : BoxShadows 
(* Defaults:
        let _boxShadows = defaultArg boxShadows new BoxShadows()
*)
-> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/DrawingContext.cs" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Media_IBrush">IBrush</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Media_IPen">IPen</a></dt><dd> </dd><dt>  <a href="T_Avalonia_RoundedRect">RoundedRect</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Media_BoxShadows">BoxShadows</a>  (Optional)</dt><dd> </dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Media_DrawingContext">DrawingContext Class</a>  
<a href="N_Avalonia_Media">Avalonia.Media Namespace</a>  

