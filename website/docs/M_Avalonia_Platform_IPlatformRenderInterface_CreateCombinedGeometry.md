# CreateCombinedGeometry Method


Creates a geometry group implementation.



## Definition
**Namespace:** <a href="N_Avalonia_Platform">Avalonia.Platform</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
IGeometryImpl CreateCombinedGeometry(
	GeometryCombineMode combineMode,
	IGeometryImpl g1,
	IGeometryImpl g2
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Function CreateCombinedGeometry ( 
	combineMode As GeometryCombineMode,
	g1 As IGeometryImpl,
	g2 As IGeometryImpl
) As IGeometryImpl
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract CreateCombinedGeometry : 
        combineMode : GeometryCombineMode * 
        g1 : IGeometryImpl * 
        g2 : IGeometryImpl -> IGeometryImpl 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Platform/IPlatformRenderInterface.cs" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Media_GeometryCombineMode">GeometryCombineMode</a></dt><dd>The combine mode</dd><dt>  <a href="T_Avalonia_Platform_IGeometryImpl">IGeometryImpl</a></dt><dd>The first geometry.</dd><dt>  <a href="T_Avalonia_Platform_IGeometryImpl">IGeometryImpl</a></dt><dd>The second geometry.</dd></dl>

#### Return Value
<a href="T_Avalonia_Platform_IGeometryImpl">IGeometryImpl</a>  
A combined geometry.

## See Also


#### Reference
<a href="T_Avalonia_Platform_IPlatformRenderInterface">IPlatformRenderInterface Interface</a>  
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  
