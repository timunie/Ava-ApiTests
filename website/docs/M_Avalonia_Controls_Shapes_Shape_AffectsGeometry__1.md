# AffectsGeometry&lt;TShape&gt; Method


Marks a property as affecting the shape's geometry.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Shapes">Avalonia.Controls.Shapes</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected static void AffectsGeometry<TShape>(
	params AvaloniaProperty[] properties
)
where TShape : Shape

```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Protected Shared Sub AffectsGeometry(Of TShape As Shape) ( 
	ParamArray properties As AvaloniaProperty()
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static member AffectsGeometry : 
        properties : AvaloniaProperty[] -> unit  when 'TShape : Shape
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Shapes/Shape.cs#L218" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>[]</dt><dd>The properties.</dd></dl>

#### Type Parameters
<dl><dt /><dd /></dl>

## Remarks
After a call to this method in a control's static constructor, any change to the property will cause <a href="M_Avalonia_Controls_Shapes_Shape_InvalidateGeometry">InvalidateGeometry()</a> to be called on the element.

## See Also


#### Reference
<a href="T_Avalonia_Controls_Shapes_Shape">Shape Class</a>  
<a href="N_Avalonia_Controls_Shapes">Avalonia.Controls.Shapes Namespace</a>  

