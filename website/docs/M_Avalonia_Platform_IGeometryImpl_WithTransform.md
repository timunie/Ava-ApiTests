# WithTransform Method


Makes a clone of the geometry with the specified transform.



## Definition
**Namespace:** <a href="N_Avalonia_Platform">Avalonia.Platform</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
ITransformedGeometryImpl WithTransform(
	Matrix transform
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Function WithTransform ( 
	transform As Matrix
) As ITransformedGeometryImpl
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract WithTransform : 
        transform : Matrix -> ITransformedGeometryImpl 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Platform/IGeometryImpl.cs" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Matrix">Matrix</a></dt><dd>The transform.</dd></dl>

#### Return Value
<a href="T_Avalonia_Platform_ITransformedGeometryImpl">ITransformedGeometryImpl</a>  
The cloned geometry.

## See Also


#### Reference
<a href="T_Avalonia_Platform_IGeometryImpl">IGeometryImpl Interface</a>  
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  
