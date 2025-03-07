# FamilyNameCollection Class




## Definition
**Namespace:** <a href="N_Avalonia_Media_Fonts">Avalonia.Media.Fonts</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public sealed class FamilyNameCollection : IReadOnlyList<string>, 
	IEnumerable<string>, IEnumerable, IReadOnlyCollection<string>
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public NotInheritable Class FamilyNameCollection
	Implements IReadOnlyList(Of String), IEnumerable(Of String), 
	IEnumerable, IReadOnlyCollection(Of String)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<SealedAttribute>]
type FamilyNameCollection = 
    class
        interface IReadOnlyList<string>
        interface IEnumerable<string>
        interface IEnumerable
        interface IReadOnlyCollection<string>
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/Fonts/FamilyNameCollection.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  FamilyNameCollection</td></tr>
<tr><td><strong>Implements</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1" target="_blank" rel="noopener noreferrer">IEnumerable</a>(<a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a>), <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlycollection-1" target="_blank" rel="noopener noreferrer">IReadOnlyCollection</a>(<a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a>), <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist-1" target="_blank" rel="noopener noreferrer">IReadOnlyList</a>(<a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a>), <a href="https://learn.microsoft.com/dotnet/api/system.collections.ienumerable" target="_blank" rel="noopener noreferrer">IEnumerable</a></td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Media_Fonts_FamilyNameCollection__ctor">FamilyNameCollection(String)</a></td>
<td>Initializes a new instance of the FamilyNameCollection class.</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Media_Fonts_FamilyNameCollection_Count">Count</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_Fonts_FamilyNameCollection_HasFallbacks">HasFallbacks</a></td>
<td>Gets a value indicating whether fallbacks are defined.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_Fonts_FamilyNameCollection_Item">Item(Int32)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_Fonts_FamilyNameCollection_PrimaryFamilyName">PrimaryFamilyName</a></td>
<td>Gets the primary family name.</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Media_Fonts_FamilyNameCollection_Equals">Equals(Object)</a></td>
<td>Determines whether the specified <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>, is equal to this instance.<br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)" target="_blank" rel="noopener noreferrer">Object.Equals(Object)</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_Fonts_FamilyNameCollection_GetEnumerator">GetEnumerator()</a></td>
<td>Returns an enumerator for the name collection.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_Fonts_FamilyNameCollection_GetHashCode">GetHashCode()</a></td>
<td>Returns a hash code for this instance.<br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.object.gethashcode" target="_blank" rel="noopener noreferrer">Object.GetHashCode()</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType()</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_Fonts_FamilyNameCollection_ToString">ToString()</a></td>
<td>Returns a <a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a> that represents this instance.<br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.object.tostring" target="_blank" rel="noopener noreferrer">Object.ToString()</a>)</td>
</tr>
</table>

## Operators
<table>
<tr>
<td><a href="M_Avalonia_Media_Fonts_FamilyNameCollection_op_Equality">Equality(FamilyNameCollection, FamilyNameCollection)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_Fonts_FamilyNameCollection_op_Inequality">Inequality(FamilyNameCollection, FamilyNameCollection)</a></td>
<td> </td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Media_Fonts">Avalonia.Media.Fonts Namespace</a>  
