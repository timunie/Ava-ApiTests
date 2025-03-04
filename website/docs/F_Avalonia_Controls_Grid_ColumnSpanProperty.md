import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# ColumnSpanProperty Field


ColumnSpan property. This is an attached property. Grid defines ColumnSpan, so that it can be set on any element treated as a cell. ColumnSpan property specifies child's width with respect to columns. Example, ColumnSpan == 2 means that child will span across two columns.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static readonly AttachedProperty<int> ColumnSpanProperty
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared ReadOnly ColumnSpanProperty As AttachedProperty(Of Integer)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static val ColumnSpanProperty: AttachedProperty<int>
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/srcAvalonia.Controls/Grid.cs" title="View the source code">View Source</a>



#### Field Value
AttachedProperty(<a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a>)

## 
Default value for the property is `1`.

## See Also


#### Reference
<a href="T_Avalonia_Controls_Grid">Grid Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
