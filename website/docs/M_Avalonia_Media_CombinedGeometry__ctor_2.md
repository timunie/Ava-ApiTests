# CombinedGeometry(GeometryCombineMode, Geometry, Geometry, Transform) Constructor


Initializes a new instance of the <a href="T_Avalonia_Media_CombinedGeometry">CombinedGeometry</a> class with the specified <a href="T_Avalonia_Media_Geometry">Geometry</a> objects, <a href="P_Avalonia_Media_CombinedGeometry_GeometryCombineMode">GeometryCombineMode</a> and <a href="T_Avalonia_Media_Transform">Transform</a>.



## Definition
**Namespace:** <a href="N_Avalonia_Media">Avalonia.Media</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public CombinedGeometry(
	GeometryCombineMode combineMode,
	Geometry? geometry1,
	Geometry? geometry2,
	Transform? transform
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub New ( 
	combineMode As GeometryCombineMode,
	geometry1 As Geometry,
	geometry2 As Geometry,
	transform As Transform
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
new : 
        combineMode : GeometryCombineMode * 
        geometry1 : Geometry * 
        geometry2 : Geometry * 
        transform : Transform -> CombinedGeometry
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/CombinedGeometry.cs#L100" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Media_GeometryCombineMode">GeometryCombineMode</a></dt><dd>The method by which geometry1 and geometry2 are combined.</dd><dt>  <a href="T_Avalonia_Media_Geometry">Geometry</a></dt><dd>The first geometry to combine.</dd><dt>  <a href="T_Avalonia_Media_Geometry">Geometry</a></dt><dd>The second geometry to combine.</dd><dt>  <a href="T_Avalonia_Media_Transform">Transform</a></dt><dd>The transform applied to the geometry.</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Media_CombinedGeometry">CombinedGeometry Class</a>  
<a href="Overload_Avalonia_Media_CombinedGeometry__ctor">CombinedGeometry Overload</a>  
<a href="N_Avalonia_Media">Avalonia.Media Namespace</a>  
