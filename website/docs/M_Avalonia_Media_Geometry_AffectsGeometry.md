# AffectsGeometry Method


Marks a property as affecting the geometry's PlatformImpl.



## Definition
**Namespace:** <a href="N_Avalonia_Media">Avalonia.Media</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected static void AffectsGeometry(
	params AvaloniaProperty[] properties
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Protected Shared Sub AffectsGeometry ( 
	ParamArray properties As AvaloniaProperty()
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static member AffectsGeometry : 
        properties : AvaloniaProperty[] -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/Geometry.cs#L148" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>[]</dt><dd>The properties.</dd></dl>After a call to this method in a control's static constructor, any change to the property will cause <a href="M_Avalonia_Media_Geometry_InvalidateGeometry">InvalidateGeometry()</a> to be called on the element.

## See Also


#### Reference
<a href="T_Avalonia_Media_Geometry">Geometry Class</a>  
<a href="N_Avalonia_Media">Avalonia.Media Namespace</a>  

