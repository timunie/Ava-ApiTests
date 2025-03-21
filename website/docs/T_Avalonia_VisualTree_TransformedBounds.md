# TransformedBounds Structure


Holds information about the bounds of a control, together with a transform and a clip.



## Definition
**Namespace:** <a href="N_Avalonia_VisualTree">Avalonia.VisualTree</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public readonly struct TransformedBounds : IEquatable<TransformedBounds>
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Structure TransformedBounds
	Implements IEquatable(Of TransformedBounds)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<SealedAttribute>]
type TransformedBounds = 
    struct
        inherit ValueType
        interface IEquatable<TransformedBounds>
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/VisualTree/TransformedBounds.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="https://learn.microsoft.com/dotnet/api/system.valuetype" target="_blank" rel="noopener noreferrer">ValueType</a>  →  TransformedBounds</td></tr>
<tr><td><strong>Implements</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.iequatable-1" target="_blank" rel="noopener noreferrer">IEquatable</a>(TransformedBounds)</td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_VisualTree_TransformedBounds__ctor">TransformedBounds(Rect, Rect, Matrix)</a></td>
<td>Initializes a new instance of the TransformedBounds struct.</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_VisualTree_TransformedBounds_Bounds">Bounds</a></td>
<td>Gets the control's bounds in its local coordinate space.</td>
</tr>
<tr>
<td><a href="P_Avalonia_VisualTree_TransformedBounds_Clip">Clip</a></td>
<td>Gets the control's clip rectangle in global coordinate space.</td>
</tr>
<tr>
<td><a href="P_Avalonia_VisualTree_TransformedBounds_Transform">Transform</a></td>
<td>Gets the transform from local to global coordinate space.</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_VisualTree_TransformedBounds_Contains">Contains(Point)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_VisualTree_TransformedBounds_Equals_1">Equals(Object)</a></td>
<td><br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.valuetype.equals" target="_blank" rel="noopener noreferrer">ValueType.Equals(Object)</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_VisualTree_TransformedBounds_Equals">Equals(TransformedBounds)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_VisualTree_TransformedBounds_GetHashCode">GetHashCode()</a></td>
<td><br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.valuetype.gethashcode" target="_blank" rel="noopener noreferrer">ValueType.GetHashCode()</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType()</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_VisualTree_TransformedBounds_ToString">ToString()</a></td>
<td><br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.valuetype.tostring" target="_blank" rel="noopener noreferrer">ValueType.ToString()</a>)</td>
</tr>
</table>

## Operators
<table>
<tr>
<td><a href="M_Avalonia_VisualTree_TransformedBounds_op_Equality">Equality(TransformedBounds, TransformedBounds)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_VisualTree_TransformedBounds_op_Inequality">Inequality(TransformedBounds, TransformedBounds)</a></td>
<td> </td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_VisualTree">Avalonia.VisualTree Namespace</a>  

