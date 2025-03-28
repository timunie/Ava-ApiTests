# TransformOperations Class


Contains a list of <a href="T_Avalonia_Media_Transformation_TransformOperation">TransformOperation</a> that represent primitive transforms that will be applied in declared order.



## Definition
**Namespace:** <a href="N_Avalonia_Media_Transformation">Avalonia.Media.Transformation</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public sealed class TransformOperations : ITransform
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public NotInheritable Class TransformOperations
	Implements ITransform
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<SealedAttribute>]
type TransformOperations = 
    class
        interface ITransform
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/Transformation/TransformOperations.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  TransformOperations</td></tr>
<tr><td><strong>Implements</strong></td><td><a href="T_Avalonia_Media_ITransform">ITransform</a></td></tr>
</table>



## Properties
<table>
<tr>
<td><a href="P_Avalonia_Media_Transformation_TransformOperations_Identity">Identity</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_Transformation_TransformOperations_IsIdentity">IsIdentity</a></td>
<td>Returns whether all operations combined together produce the identity matrix.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_Transformation_TransformOperations_Operations">Operations</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_Transformation_TransformOperations_Value">Value</a></td>
<td> </td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Media_Transformation_TransformOperations_CreateBuilder">CreateBuilder(Int32)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)" target="_blank" rel="noopener noreferrer">Equals(Object)</a></td>
<td>Determines whether the specified object is equal to the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gethashcode" target="_blank" rel="noopener noreferrer">GetHashCode()</a></td>
<td>Serves as the default hash function.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType()</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_Transformation_TransformOperations_Interpolate">Interpolate(TransformOperations, TransformOperations, Double)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_Transformation_TransformOperations_Parse">Parse(String)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.tostring" target="_blank" rel="noopener noreferrer">ToString()</a></td>
<td>Returns a string that represents the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
</table>

## Extension Methods
<table>
<tr>
<td><a href="M_Avalonia_Media_TransformExtensions_ToImmutable">ToImmutable()</a></td>
<td>Converts a transform to an immutable transform.<br />(Defined by <a href="T_Avalonia_Media_TransformExtensions">TransformExtensions</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Media_Transformation">Avalonia.Media.Transformation Namespace</a>  

