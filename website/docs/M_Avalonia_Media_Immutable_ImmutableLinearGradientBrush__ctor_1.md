# ImmutableLinearGradientBrush(IReadOnlyList&lt;ImmutableGradientStop&gt;, Double, ImmutableTransform, Nullable&lt;RelativePoint&gt;, GradientSpreadMethod, Nullable&lt;RelativePoint&gt;, Nullable&lt;RelativePoint&gt;) Constructor


Initializes a new instance of the <a href="T_Avalonia_Media_Immutable_ImmutableLinearGradientBrush">ImmutableLinearGradientBrush</a> class.



## Definition
**Namespace:** <a href="N_Avalonia_Media_Immutable">Avalonia.Media.Immutable</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public ImmutableLinearGradientBrush(
	IReadOnlyList<ImmutableGradientStop> gradientStops,
	double opacity = 1,
	ImmutableTransform? transform = null,
	RelativePoint? transformOrigin = null,
	GradientSpreadMethod spreadMethod = GradientSpreadMethod.Pad,
	RelativePoint? startPoint = null,
	RelativePoint? endPoint = null
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub New ( 
	gradientStops As IReadOnlyList(Of ImmutableGradientStop),
	Optional opacity As Double = 1,
	Optional transform As ImmutableTransform = Nothing,
	Optional transformOrigin As RelativePoint? = Nothing,
	Optional spreadMethod As GradientSpreadMethod = GradientSpreadMethod.Pad,
	Optional startPoint As RelativePoint? = Nothing,
	Optional endPoint As RelativePoint? = Nothing
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
new : 
        gradientStops : IReadOnlyList<ImmutableGradientStop> * 
        ?opacity : float * 
        ?transform : ImmutableTransform * 
        ?transformOrigin : Nullable<RelativePoint> * 
        ?spreadMethod : GradientSpreadMethod * 
        ?startPoint : Nullable<RelativePoint> * 
        ?endPoint : Nullable<RelativePoint> 
(* Defaults:
        let _opacity = defaultArg opacity 1
        let _transform = defaultArg transform null
        let _transformOrigin = defaultArg transformOrigin null
        let _spreadMethod = defaultArg spreadMethod GradientSpreadMethod.Pad
        let _startPoint = defaultArg startPoint null
        let _endPoint = defaultArg endPoint null
*)
-> ImmutableLinearGradientBrush
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/Immutable/ImmutableLinearGradientBrush.cs#L28" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist-1" target="_blank" rel="noopener noreferrer">IReadOnlyList</a>(<a href="T_Avalonia_Media_Immutable_ImmutableGradientStop">ImmutableGradientStop</a>)</dt><dd>The gradient stops.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a>  (Optional)</dt><dd>The opacity of the brush.</dd><dt>  <a href="T_Avalonia_Media_Immutable_ImmutableTransform">ImmutableTransform</a>  (Optional)</dt><dd>The transform of the brush.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.nullable-1" target="_blank" rel="noopener noreferrer">Nullable</a>(<a href="T_Avalonia_RelativePoint">RelativePoint</a>)  (Optional)</dt><dd>The transform origin of the brush</dd><dt>  <a href="T_Avalonia_Media_GradientSpreadMethod">GradientSpreadMethod</a>  (Optional)</dt><dd>The spread method.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.nullable-1" target="_blank" rel="noopener noreferrer">Nullable</a>(<a href="T_Avalonia_RelativePoint">RelativePoint</a>)  (Optional)</dt><dd>The start point for the gradient.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.nullable-1" target="_blank" rel="noopener noreferrer">Nullable</a>(<a href="T_Avalonia_RelativePoint">RelativePoint</a>)  (Optional)</dt><dd>The end point for the gradient.</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Media_Immutable_ImmutableLinearGradientBrush">ImmutableLinearGradientBrush Class</a>  
<a href="Overload_Avalonia_Media_Immutable_ImmutableLinearGradientBrush__ctor">ImmutableLinearGradientBrush Overload</a>  
<a href="N_Avalonia_Media_Immutable">Avalonia.Media.Immutable Namespace</a>  

