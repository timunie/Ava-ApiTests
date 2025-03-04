import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# CreateDefiningGeometry Method


Creates the shape's defining geometry.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Shapes">Avalonia.Controls.Shapes</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected override Geometry CreateDefiningGeometry()
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Protected Overrides Function CreateDefiningGeometry As Geometry
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract CreateDefiningGeometry : unit -> Geometry 
override CreateDefiningGeometry : unit -> Geometry 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/srcAvalonia.Controls/Shapes/Rectangle.cs#L47" title="View the source code">View Source</a>



#### Return Value
Geometry  
Defining Geometry of the shape.

## See Also


#### Reference
<a href="T_Avalonia_Controls_Shapes_Rectangle">Rectangle Class</a>  
<a href="N_Avalonia_Controls_Shapes">Avalonia.Controls.Shapes Namespace</a>  
