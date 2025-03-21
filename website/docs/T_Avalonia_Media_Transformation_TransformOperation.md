# TransformOperation Structure


Represents a single primitive transform (like translation, rotation, scale, etc.).



## Definition
**Namespace:** <a href="N_Avalonia_Media_Transformation">Avalonia.Media.Transformation</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public struct TransformOperation : IEquatable<TransformOperation>
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Structure TransformOperation
	Implements IEquatable(Of TransformOperation)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<SealedAttribute>]
type TransformOperation = 
    struct
        inherit ValueType
        interface IEquatable<TransformOperation>
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/Transformation/TransformOperation.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="https://learn.microsoft.com/dotnet/api/system.valuetype" target="_blank" rel="noopener noreferrer">ValueType</a>  →  TransformOperation</td></tr>
<tr><td><strong>Implements</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.iequatable-1" target="_blank" rel="noopener noreferrer">IEquatable</a>(TransformOperation)</td></tr>
</table>



## Properties
<table>
<tr>
<td><a href="P_Avalonia_Media_Transformation_TransformOperation_Identity">Identity</a></td>
<td>Returns new identity transform operation.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_Transformation_TransformOperation_IsIdentity">IsIdentity</a></td>
<td>Returns whether operation produces the identity matrix.</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Media_Transformation_TransformOperation_Bake">Bake()</a></td>
<td>Bakes this operation to a transform matrix.</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType()</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_Transformation_TransformOperation_TryInterpolate">TryInterpolate(Nullable(TransformOperation), Nullable(TransformOperation), Double, TransformOperation)</a></td>
<td>Attempts to interpolate between two transform operations.</td>
</tr>
</table>

## Fields
<table>
<tr>
<td><a href="F_Avalonia_Media_Transformation_TransformOperation_Data">Data</a></td>
<td> </td>
</tr>
<tr>
<td><a href="F_Avalonia_Media_Transformation_TransformOperation_Matrix">Matrix</a></td>
<td> </td>
</tr>
<tr>
<td><a href="F_Avalonia_Media_Transformation_TransformOperation_Type">Type</a></td>
<td> </td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Media_Transformation">Avalonia.Media.Transformation Namespace</a>  

