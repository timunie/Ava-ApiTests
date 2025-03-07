# Pen(IBrush, Double, IDashStyle, PenLineCap, PenLineJoin, Double) Constructor


Initializes a new instance of the <a href="T_Avalonia_Media_Pen">Pen</a> class.



## Definition
**Namespace:** <a href="N_Avalonia_Media">Avalonia.Media</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public Pen(
	IBrush? brush,
	double thickness = 1,
	IDashStyle? dashStyle = null,
	PenLineCap lineCap = PenLineCap.Flat,
	PenLineJoin lineJoin = PenLineJoin.Miter,
	double miterLimit = 10
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub New ( 
	brush As IBrush,
	Optional thickness As Double = 1,
	Optional dashStyle As IDashStyle = Nothing,
	Optional lineCap As PenLineCap = PenLineCap.Flat,
	Optional lineJoin As PenLineJoin = PenLineJoin.Miter,
	Optional miterLimit As Double = 10
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
new : 
        brush : IBrush * 
        ?thickness : float * 
        ?dashStyle : IDashStyle * 
        ?lineCap : PenLineCap * 
        ?lineJoin : PenLineJoin * 
        ?miterLimit : float 
(* Defaults:
        let _thickness = defaultArg thickness 1
        let _dashStyle = defaultArg dashStyle null
        let _lineCap = defaultArg lineCap PenLineCap.Flat
        let _lineJoin = defaultArg lineJoin PenLineJoin.Miter
        let _miterLimit = defaultArg miterLimit 10
*)
-> Pen
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/Pen.cs#L91" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Media_IBrush">IBrush</a></dt><dd>The brush used to draw.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a>  (Optional)</dt><dd>The stroke thickness.</dd><dt>  <a href="T_Avalonia_Media_IDashStyle">IDashStyle</a>  (Optional)</dt><dd>The dash style.</dd><dt>  <a href="T_Avalonia_Media_PenLineCap">PenLineCap</a>  (Optional)</dt><dd>The line cap.</dd><dt>  <a href="T_Avalonia_Media_PenLineJoin">PenLineJoin</a>  (Optional)</dt><dd>The line join.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a>  (Optional)</dt><dd>The miter limit.</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Media_Pen">Pen Class</a>  
<a href="Overload_Avalonia_Media_Pen__ctor">Pen Overload</a>  
<a href="N_Avalonia_Media">Avalonia.Media Namespace</a>  
