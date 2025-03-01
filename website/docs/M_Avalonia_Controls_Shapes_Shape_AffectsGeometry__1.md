import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# AffectsGeometry&lt;TShape&gt; Method


Marks a property as affecting the shape's geometry.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Shapes">Avalonia.Controls.Shapes</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

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



#### Parameters
<dl><dt>  AvaloniaProperty[]</dt><dd>The properties.</dd></dl>

#### Type Parameters
<dl><dt /><dd /></dl>After a call to this method in a control's static constructor, any change to the property will cause <a href="M_Avalonia_Controls_Shapes_Shape_InvalidateGeometry">InvalidateGeometry()</a> to be called on the element.

## See Also


#### Reference
<a href="T_Avalonia_Controls_Shapes_Shape">Shape Class</a>  
<a href="N_Avalonia_Controls_Shapes">Avalonia.Controls.Shapes Namespace</a>  
