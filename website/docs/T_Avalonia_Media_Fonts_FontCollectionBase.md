# FontCollectionBase Class




## Definition
**Namespace:** <a href="N_Avalonia_Media_Fonts">Avalonia.Media.Fonts</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public abstract class FontCollectionBase : IFontCollection, 
	IReadOnlyList<FontFamily>, IEnumerable<FontFamily>, IEnumerable, 
	IReadOnlyCollection<FontFamily>, IDisposable
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public MustInherit Class FontCollectionBase
	Implements IFontCollection, IReadOnlyList(Of FontFamily), 
	IEnumerable(Of FontFamily), IEnumerable, IReadOnlyCollection(Of FontFamily), 
	IDisposable
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<AbstractClassAttribute>]
type FontCollectionBase = 
    class
        interface IFontCollection
        interface IReadOnlyList<FontFamily>
        interface IEnumerable<FontFamily>
        interface IEnumerable
        interface IReadOnlyCollection<FontFamily>
        interface IDisposable
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/Fonts/FontCollectionBase.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  FontCollectionBase</td></tr>
<tr><td><strong>Derived</strong></td><td><a href="T_Avalonia_Media_Fonts_EmbeddedFontCollection">Avalonia.Media.Fonts.EmbeddedFontCollection</a></td></tr>
<tr><td><strong>Implements</strong></td><td><a href="T_Avalonia_Media_Fonts_IFontCollection">IFontCollection</a>, <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1" target="_blank" rel="noopener noreferrer">IEnumerable</a>(<a href="T_Avalonia_Media_FontFamily">FontFamily</a>), <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlycollection-1" target="_blank" rel="noopener noreferrer">IReadOnlyCollection</a>(<a href="T_Avalonia_Media_FontFamily">FontFamily</a>), <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist-1" target="_blank" rel="noopener noreferrer">IReadOnlyList</a>(<a href="T_Avalonia_Media_FontFamily">FontFamily</a>), <a href="https://learn.microsoft.com/dotnet/api/system.collections.ienumerable" target="_blank" rel="noopener noreferrer">IEnumerable</a>, <a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a></td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Media_Fonts_FontCollectionBase__ctor">FontCollectionBase()</a></td>
<td>Initializes a new instance of the FontCollectionBase class</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Media_Fonts_FontCollectionBase_Count">Count</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_Fonts_FontCollectionBase_Item">Item(Int32)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_Fonts_FontCollectionBase_Key">Key</a></td>
<td> </td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)" target="_blank" rel="noopener noreferrer">Equals(Object)</a></td>
<td>Determines whether the specified object is equal to the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.finalize" target="_blank" rel="noopener noreferrer">Finalize()</a></td>
<td>Allows an object to try to free resources and perform other cleanup operations before it is reclaimed by garbage collection.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_Fonts_FontCollectionBase_GetEnumerator">GetEnumerator()</a></td>
<td> </td>
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
<td><a href="M_Avalonia_Media_Fonts_FontCollectionBase_Initialize">Initialize(IFontManagerImpl)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone" target="_blank" rel="noopener noreferrer">MemberwiseClone()</a></td>
<td>Creates a shallow copy of the current <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.tostring" target="_blank" rel="noopener noreferrer">ToString()</a></td>
<td>Returns a string that represents the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_Fonts_FontCollectionBase_TryGetGlyphTypeface">TryGetGlyphTypeface(String, FontStyle, FontWeight, FontStretch, IGlyphTypeface)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_Fonts_FontCollectionBase_TryMatchCharacter">TryMatchCharacter(Int32, FontStyle, FontWeight, FontStretch, String, CultureInfo, Typeface)</a></td>
<td> </td>
</tr>
</table>

## Fields
<table>
<tr>
<td><a href="F_Avalonia_Media_Fonts_FontCollectionBase__glyphTypefaceCache">_glyphTypefaceCache</a></td>
<td> </td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Media_Fonts">Avalonia.Media.Fonts Namespace</a>  
