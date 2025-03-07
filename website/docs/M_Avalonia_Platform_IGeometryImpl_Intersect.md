# Intersect Method


Intersects the geometry with another geometry.



## Definition
**Namespace:** <a href="N_Avalonia_Platform">Avalonia.Platform</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
IGeometryImpl? Intersect(
	IGeometryImpl geometry
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Function Intersect ( 
	geometry As IGeometryImpl
) As IGeometryImpl
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract Intersect : 
        geometry : IGeometryImpl -> IGeometryImpl 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Platform/IGeometryImpl.cs" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Platform_IGeometryImpl">IGeometryImpl</a></dt><dd>The other geometry.</dd></dl>

#### Return Value
<a href="T_Avalonia_Platform_IGeometryImpl">IGeometryImpl</a>  
A new <a href="T_Avalonia_Platform_IGeometryImpl">IGeometryImpl</a> representing the intersection or `null` when the operation failed.

## See Also


#### Reference
<a href="T_Avalonia_Platform_IGeometryImpl">IGeometryImpl Interface</a>  
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  
