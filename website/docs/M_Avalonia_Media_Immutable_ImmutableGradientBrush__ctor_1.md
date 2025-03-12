# ImmutableGradientBrush(IReadOnlyList&lt;ImmutableGradientStop&gt;, Double, ImmutableTransform, Nullable&lt;RelativePoint&gt;, GradientSpreadMethod) Constructor


Initializes a new instance of the <a href="T_Avalonia_Media_Immutable_ImmutableGradientBrush">ImmutableGradientBrush</a> class.



## Definition
**Namespace:** <a href="N_Avalonia_Media_Immutable">Avalonia.Media.Immutable</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected ImmutableGradientBrush(
	IReadOnlyList<ImmutableGradientStop> gradientStops,
	double opacity,
	ImmutableTransform? transform,
	RelativePoint? transformOrigin,
	GradientSpreadMethod spreadMethod
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Protected Sub New ( 
	gradientStops As IReadOnlyList(Of ImmutableGradientStop),
	opacity As Double,
	transform As ImmutableTransform,
	transformOrigin As RelativePoint?,
	spreadMethod As GradientSpreadMethod
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
new : 
        gradientStops : IReadOnlyList<ImmutableGradientStop> * 
        opacity : float * 
        transform : ImmutableTransform * 
        transformOrigin : Nullable<RelativePoint> * 
        spreadMethod : GradientSpreadMethod -> ImmutableGradientBrush
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/Immutable/ImmutableGradientBrush.cs#L18" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist-1" target="_blank" rel="noopener noreferrer">IReadOnlyList</a>(<a href="T_Avalonia_Media_Immutable_ImmutableGradientStop">ImmutableGradientStop</a>)</dt><dd>The gradient stops.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a></dt><dd>The opacity of the brush.</dd><dt>  <a href="T_Avalonia_Media_Immutable_ImmutableTransform">ImmutableTransform</a></dt><dd>The transform of the brush.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.nullable-1" target="_blank" rel="noopener noreferrer">Nullable</a>(<a href="T_Avalonia_RelativePoint">RelativePoint</a>)</dt><dd>The transform origin of the brush</dd><dt>  <a href="T_Avalonia_Media_GradientSpreadMethod">GradientSpreadMethod</a></dt><dd>The spread method.</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Media_Immutable_ImmutableGradientBrush">ImmutableGradientBrush Class</a>  
<a href="Overload_Avalonia_Media_Immutable_ImmutableGradientBrush__ctor">ImmutableGradientBrush Overload</a>  
<a href="N_Avalonia_Media_Immutable">Avalonia.Media.Immutable Namespace</a>  

