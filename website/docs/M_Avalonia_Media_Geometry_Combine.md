# Combine Method


Combines the two geometries using the specified <a href="T_Avalonia_Media_GeometryCombineMode">GeometryCombineMode</a> and applies the specified transform to the resulting geometry.



## Definition
**Namespace:** <a href="N_Avalonia_Media">Avalonia.Media</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static Geometry Combine(
	Geometry geometry1,
	RectangleGeometry geometry2,
	GeometryCombineMode combineMode,
	Transform? transform = null
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Function Combine ( 
	geometry1 As Geometry,
	geometry2 As RectangleGeometry,
	combineMode As GeometryCombineMode,
	Optional transform As Transform = Nothing
) As Geometry
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static member Combine : 
        geometry1 : Geometry * 
        geometry2 : RectangleGeometry * 
        combineMode : GeometryCombineMode * 
        ?transform : Transform 
(* Defaults:
        let _transform = defaultArg transform null
*)
-> Geometry 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/Geometry.cs#L237" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Media_Geometry">Geometry</a></dt><dd>The first geometry to combine.</dd><dt>  <a href="T_Avalonia_Media_RectangleGeometry">RectangleGeometry</a></dt><dd>The second geometry to combine.</dd><dt>  <a href="T_Avalonia_Media_GeometryCombineMode">GeometryCombineMode</a></dt><dd>One of the enumeration values that specifies how the geometries are combined.</dd><dt>  <a href="T_Avalonia_Media_Transform">Transform</a>  (Optional)</dt><dd>A transformation to apply to the combined geometry, or <code>null</code>.</dd></dl>

#### Return Value
<a href="T_Avalonia_Media_Geometry">Geometry</a>  


## See Also


#### Reference
<a href="T_Avalonia_Media_Geometry">Geometry Class</a>  
<a href="N_Avalonia_Media">Avalonia.Media Namespace</a>  

