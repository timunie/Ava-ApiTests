# GetWidenedGeometry Method


Gets a geometry that is the shape defined by the stroke on the geometry produced by the specified Pen.



## Definition
**Namespace:** <a href="N_Avalonia_Platform">Avalonia.Platform</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
IGeometryImpl GetWidenedGeometry(
	IPen pen
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Function GetWidenedGeometry ( 
	pen As IPen
) As IGeometryImpl
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract GetWidenedGeometry : 
        pen : IPen -> IGeometryImpl 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Platform/IGeometryImpl.cs" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Media_IPen">IPen</a></dt><dd>The pen to use.</dd></dl>

#### Return Value
<a href="T_Avalonia_Platform_IGeometryImpl">IGeometryImpl</a>  
The outlined geometry.

## See Also


#### Reference
<a href="T_Avalonia_Platform_IGeometryImpl">IGeometryImpl Interface</a>  
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  
