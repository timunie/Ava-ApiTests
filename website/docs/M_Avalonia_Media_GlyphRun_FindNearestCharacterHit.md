# FindNearestCharacterHit Method


Finds the nearest <a href="T_Avalonia_Media_CharacterHit">CharacterHit</a> at given index.



## Definition
**Namespace:** <a href="N_Avalonia_Media">Avalonia.Media</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public CharacterHit FindNearestCharacterHit(
	int index,
	out double width
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function FindNearestCharacterHit ( 
	index As Integer,
	<OutAttribute> ByRef width As Double
) As CharacterHit
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member FindNearestCharacterHit : 
        index : int * 
        width : float byref -> CharacterHit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/GlyphRun.cs#L537" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a></dt><dd>The index.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a></dt><dd>The width of found cluster.</dd></dl>

#### Return Value
<a href="T_Avalonia_Media_CharacterHit">CharacterHit</a>  
The nearest <a href="T_Avalonia_Media_CharacterHit">CharacterHit</a>.

## See Also


#### Reference
<a href="T_Avalonia_Media_GlyphRun">GlyphRun Class</a>  
<a href="N_Avalonia_Media">Avalonia.Media Namespace</a>  

