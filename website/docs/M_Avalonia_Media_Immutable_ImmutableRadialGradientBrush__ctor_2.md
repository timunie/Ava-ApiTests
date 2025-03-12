# ImmutableRadialGradientBrush(IReadOnlyList&lt;ImmutableGradientStop&gt;, Double, ImmutableTransform, Nullable&lt;RelativePoint&gt;, GradientSpreadMethod, Nullable&lt;RelativePoint&gt;, Nullable&lt;RelativePoint&gt;, Nullable&lt;RelativeScalar&gt;, Nullable&lt;RelativeScalar&gt;) Constructor


Initializes a new instance of the <a href="T_Avalonia_Media_Immutable_ImmutableRadialGradientBrush">ImmutableRadialGradientBrush</a> class



## Definition
**Namespace:** <a href="N_Avalonia_Media_Immutable">Avalonia.Media.Immutable</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public ImmutableRadialGradientBrush(
	IReadOnlyList<ImmutableGradientStop> gradientStops,
	double opacity = 1,
	ImmutableTransform? transform = null,
	RelativePoint? transformOrigin = null,
	GradientSpreadMethod spreadMethod = GradientSpreadMethod.Pad,
	RelativePoint? center = null,
	RelativePoint? gradientOrigin = null,
	RelativeScalar? radiusX = null,
	RelativeScalar? radiusY = null
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
	Optional center As RelativePoint? = Nothing,
	Optional gradientOrigin As RelativePoint? = Nothing,
	Optional radiusX As RelativeScalar? = Nothing,
	Optional radiusY As RelativeScalar? = Nothing
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
        ?center : Nullable<RelativePoint> * 
        ?gradientOrigin : Nullable<RelativePoint> * 
        ?radiusX : Nullable<RelativeScalar> * 
        ?radiusY : Nullable<RelativeScalar> 
(* Defaults:
        let _opacity = defaultArg opacity 1
        let _transform = defaultArg transform null
        let _transformOrigin = defaultArg transformOrigin null
        let _spreadMethod = defaultArg spreadMethod GradientSpreadMethod.Pad
        let _center = defaultArg center null
        let _gradientOrigin = defaultArg gradientOrigin null
        let _radiusX = defaultArg radiusX null
        let _radiusY = defaultArg radiusY null
*)
-> ImmutableRadialGradientBrush
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/Immutable/ImmutableRadialGradientBrush.cs#L55" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist-1" target="_blank" rel="noopener noreferrer">IReadOnlyList</a>(<a href="T_Avalonia_Media_Immutable_ImmutableGradientStop">ImmutableGradientStop</a>)</dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a>  (Optional)</dt><dd> </dd><dt>  <a href="T_Avalonia_Media_Immutable_ImmutableTransform">ImmutableTransform</a>  (Optional)</dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.nullable-1" target="_blank" rel="noopener noreferrer">Nullable</a>(<a href="T_Avalonia_RelativePoint">RelativePoint</a>)  (Optional)</dt><dd> </dd><dt>  <a href="T_Avalonia_Media_GradientSpreadMethod">GradientSpreadMethod</a>  (Optional)</dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.nullable-1" target="_blank" rel="noopener noreferrer">Nullable</a>(<a href="T_Avalonia_RelativePoint">RelativePoint</a>)  (Optional)</dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.nullable-1" target="_blank" rel="noopener noreferrer">Nullable</a>(<a href="T_Avalonia_RelativePoint">RelativePoint</a>)  (Optional)</dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.nullable-1" target="_blank" rel="noopener noreferrer">Nullable</a>(<a href="T_Avalonia_RelativeScalar">RelativeScalar</a>)  (Optional)</dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.nullable-1" target="_blank" rel="noopener noreferrer">Nullable</a>(<a href="T_Avalonia_RelativeScalar">RelativeScalar</a>)  (Optional)</dt><dd> </dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Media_Immutable_ImmutableRadialGradientBrush">ImmutableRadialGradientBrush Class</a>  
<a href="Overload_Avalonia_Media_Immutable_ImmutableRadialGradientBrush__ctor">ImmutableRadialGradientBrush Overload</a>  
<a href="N_Avalonia_Media_Immutable">Avalonia.Media.Immutable Namespace</a>  

