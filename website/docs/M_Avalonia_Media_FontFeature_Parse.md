# Parse Method


Parses a string to return a <a href="T_Avalonia_Media_FontFeature">FontFeature</a>. Syntax is the following: Syntax Value Start End Setting value: kern 1 0 ∞ Turn feature on +kern 1 0 ∞ Turn feature on -kern 0 0 ∞ Turn feature off kern=0 0 0 ∞ Turn feature off kern=1 1 0 ∞ Turn feature on aalt=2 2 0 ∞ Choose 2nd alternate Setting index: kern[] 1 0 ∞ Turn feature on kern[:] 1 0 ∞ Turn feature on kern[5:] 1 5 ∞ Turn feature on, partial kern[:5] 1 0 5 Turn feature on, partial kern[3:5] 1 3 5 Turn feature on, range kern[3] 1 3 3+1 Turn feature on, single char Mixing it all: aalt[3:5]=2 2 3 5 Turn 2nd alternate on for range



## Definition
**Namespace:** <a href="N_Avalonia_Media">Avalonia.Media</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static FontFeature Parse(
	string s
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Function Parse ( 
	s As String
) As FontFeature
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static member Parse : 
        s : string -> FontFeature 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/FontFeature.cs#L86" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a></dt><dd>The string.</dd></dl>

#### Return Value
<a href="T_Avalonia_Media_FontFeature">FontFeature</a>  
The <a href="T_Avalonia_Media_FontFeature">FontFeature</a>.

## See Also


#### Reference
<a href="T_Avalonia_Media_FontFeature">FontFeature Class</a>  
<a href="N_Avalonia_Media">Avalonia.Media Namespace</a>  

