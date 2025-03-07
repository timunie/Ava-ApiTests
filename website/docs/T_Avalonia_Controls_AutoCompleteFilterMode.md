# AutoCompleteFilterMode Enumeration


Specifies how text in the text box portion of the <a href="T_Avalonia_Controls_AutoCompleteBox">AutoCompleteBox</a> control is used to filter items specified by the <a href="P_Avalonia_Controls_AutoCompleteBox_ItemsSource">ItemsSource</a> property for display in the drop-down.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public enum AutoCompleteFilterMode
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Enumeration AutoCompleteFilterMode
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type AutoCompleteFilterMode
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/AutoCompleteBox/AutoCompleteFilterMode.cs" title="View the source code">View Source</a>



## Members
<table>
<tr>
<td>None</td>
<td>0</td>
<td>Specifies that no filter is used. All items are returned.</td>
</tr>
<tr>
<td>StartsWith</td>
<td>1</td>
<td>Specifies a culture-sensitive, case-insensitive filter where the returned items start with the specified text. The filter uses the <a href="https://learn.microsoft.com/dotnet/api/system.string.startswith#system-string-startswith(system-string-system-stringcomparison)" target="_blank" rel="noopener noreferrer">StartsWith(String, StringComparison)</a> method, specifying <a href="https://learn.microsoft.com/dotnet/api/system.stringcomparer.currentcultureignorecase" target="_blank" rel="noopener noreferrer">CurrentCultureIgnoreCase</a> as the string comparison criteria.</td>
</tr>
<tr>
<td>StartsWithCaseSensitive</td>
<td>2</td>
<td>Specifies a culture-sensitive, case-sensitive filter where the returned items start with the specified text. The filter uses the <a href="https://learn.microsoft.com/dotnet/api/system.string.startswith#system-string-startswith(system-string-system-stringcomparison)" target="_blank" rel="noopener noreferrer">StartsWith(String, StringComparison)</a> method, specifying <a href="https://learn.microsoft.com/dotnet/api/system.stringcomparer.currentculture" target="_blank" rel="noopener noreferrer">CurrentCulture</a> as the string comparison criteria.</td>
</tr>
<tr>
<td>StartsWithOrdinal</td>
<td>3</td>
<td>Specifies an ordinal, case-insensitive filter where the returned items start with the specified text. The filter uses the <a href="https://learn.microsoft.com/dotnet/api/system.string.startswith#system-string-startswith(system-string-system-stringcomparison)" target="_blank" rel="noopener noreferrer">StartsWith(String, StringComparison)</a> method, specifying <a href="https://learn.microsoft.com/dotnet/api/system.stringcomparer.ordinalignorecase" target="_blank" rel="noopener noreferrer">OrdinalIgnoreCase</a> as the string comparison criteria.</td>
</tr>
<tr>
<td>StartsWithOrdinalCaseSensitive</td>
<td>4</td>
<td>Specifies an ordinal, case-sensitive filter where the returned items start with the specified text. The filter uses the <a href="https://learn.microsoft.com/dotnet/api/system.string.startswith#system-string-startswith(system-string-system-stringcomparison)" target="_blank" rel="noopener noreferrer">StartsWith(String, StringComparison)</a> method, specifying <a href="https://learn.microsoft.com/dotnet/api/system.stringcomparer.ordinal" target="_blank" rel="noopener noreferrer">Ordinal</a> as the string comparison criteria.</td>
</tr>
<tr>
<td>Contains</td>
<td>5</td>
<td>Specifies a culture-sensitive, case-insensitive filter where the returned items contain the specified text.</td>
</tr>
<tr>
<td>ContainsCaseSensitive</td>
<td>6</td>
<td>Specifies a culture-sensitive, case-sensitive filter where the returned items contain the specified text.</td>
</tr>
<tr>
<td>ContainsOrdinal</td>
<td>7</td>
<td>Specifies an ordinal, case-insensitive filter where the returned items contain the specified text.</td>
</tr>
<tr>
<td>ContainsOrdinalCaseSensitive</td>
<td>8</td>
<td>Specifies an ordinal, case-sensitive filter where the returned items contain the specified text.</td>
</tr>
<tr>
<td>Equals</td>
<td>9</td>
<td>Specifies a culture-sensitive, case-insensitive filter where the returned items equal the specified text. The filter uses the <a href="https://learn.microsoft.com/dotnet/api/system.string.equals#system-string-equals(system-string-system-stringcomparison)" target="_blank" rel="noopener noreferrer">Equals(String, StringComparison)</a> method, specifying <a href="https://learn.microsoft.com/dotnet/api/system.stringcomparer.currentcultureignorecase" target="_blank" rel="noopener noreferrer">CurrentCultureIgnoreCase</a> as the search comparison criteria.</td>
</tr>
<tr>
<td>EqualsCaseSensitive</td>
<td>10</td>
<td>Specifies a culture-sensitive, case-sensitive filter where the returned items equal the specified text. The filter uses the <a href="https://learn.microsoft.com/dotnet/api/system.string.equals#system-string-equals(system-string-system-stringcomparison)" target="_blank" rel="noopener noreferrer">Equals(String, StringComparison)</a> method, specifying <a href="https://learn.microsoft.com/dotnet/api/system.stringcomparer.currentculture" target="_blank" rel="noopener noreferrer">CurrentCulture</a> as the string comparison criteria.</td>
</tr>
<tr>
<td>EqualsOrdinal</td>
<td>11</td>
<td>Specifies an ordinal, case-insensitive filter where the returned items equal the specified text. The filter uses the <a href="https://learn.microsoft.com/dotnet/api/system.string.equals#system-string-equals(system-string-system-stringcomparison)" target="_blank" rel="noopener noreferrer">Equals(String, StringComparison)</a> method, specifying <a href="https://learn.microsoft.com/dotnet/api/system.stringcomparer.ordinalignorecase" target="_blank" rel="noopener noreferrer">OrdinalIgnoreCase</a> as the string comparison criteria.</td>
</tr>
<tr>
<td>EqualsOrdinalCaseSensitive</td>
<td>12</td>
<td>Specifies an ordinal, case-sensitive filter where the returned items equal the specified text. The filter uses the <a href="https://learn.microsoft.com/dotnet/api/system.string.equals#system-string-equals(system-string-system-stringcomparison)" target="_blank" rel="noopener noreferrer">Equals(String, StringComparison)</a> method, specifying <a href="https://learn.microsoft.com/dotnet/api/system.stringcomparer.ordinal" target="_blank" rel="noopener noreferrer">Ordinal</a> as the string comparison criteria.</td>
</tr>
<tr>
<td>Custom</td>
<td>13</td>
<td>Specifies that a custom filter is used. This mode is used when the <a href="P_Avalonia_Controls_AutoCompleteBox_TextFilter">TextFilter</a> or <a href="P_Avalonia_Controls_AutoCompleteBox_ItemFilter">ItemFilter</a> properties are set.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
