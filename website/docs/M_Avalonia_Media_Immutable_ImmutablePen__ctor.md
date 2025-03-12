# ImmutablePen(IImmutableBrush, Double, ImmutableDashStyle, PenLineCap, PenLineJoin, Double) Constructor


Initializes a new instance of the <a href="T_Avalonia_Media_Pen">Pen</a> class.



## Definition
**Namespace:** <a href="N_Avalonia_Media_Immutable">Avalonia.Media.Immutable</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public ImmutablePen(
	IImmutableBrush? brush,
	double thickness = 1,
	ImmutableDashStyle? dashStyle = null,
	PenLineCap lineCap = PenLineCap.Flat,
	PenLineJoin lineJoin = PenLineJoin.Miter,
	double miterLimit = 10
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub New ( 
	brush As IImmutableBrush,
	Optional thickness As Double = 1,
	Optional dashStyle As ImmutableDashStyle = Nothing,
	Optional lineCap As PenLineCap = PenLineCap.Flat,
	Optional lineJoin As PenLineJoin = PenLineJoin.Miter,
	Optional miterLimit As Double = 10
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
new : 
        brush : IImmutableBrush * 
        ?thickness : float * 
        ?dashStyle : ImmutableDashStyle * 
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
-> ImmutablePen
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/Immutable/ImmutablePen.cs#L40" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Media_IImmutableBrush">IImmutableBrush</a></dt><dd>The brush used to draw.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a>  (Optional)</dt><dd>The stroke thickness.</dd><dt>  <a href="T_Avalonia_Media_Immutable_ImmutableDashStyle">ImmutableDashStyle</a>  (Optional)</dt><dd>The dash style.</dd><dt>  <a href="T_Avalonia_Media_PenLineCap">PenLineCap</a>  (Optional)</dt><dd>The line cap.</dd><dt>  <a href="T_Avalonia_Media_PenLineJoin">PenLineJoin</a>  (Optional)</dt><dd>The line join.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a>  (Optional)</dt><dd>The miter limit.</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Media_Immutable_ImmutablePen">ImmutablePen Class</a>  
<a href="Overload_Avalonia_Media_Immutable_ImmutablePen__ctor">ImmutablePen Overload</a>  
<a href="N_Avalonia_Media_Immutable">Avalonia.Media.Immutable Namespace</a>  

