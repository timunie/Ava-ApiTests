# AutoCompleteSelector&lt;T&gt; Delegate


Represents the selector used by the <a href="T_Avalonia_Controls_AutoCompleteBox">AutoCompleteBox</a> control to determine how the specified text should be modified with an item.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public delegate string AutoCompleteSelector<T>(
	string? search,
	T item
)

```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Delegate Function AutoCompleteSelector(Of T) ( 
	search As String,
	item As T
) As String
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type AutoCompleteSelector = 
    delegate of 
        search : string * 
        item : 'T -> string
```
</TabItem>
</Tabs>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a></dt><dd>The string used as the basis for filtering.</dd><dt>  T</dt><dd>The selected item that should be combined with the <em>search</em> parameter.</dd></dl>

#### Type Parameters
<dl><dt /><dd>The type used for filtering the <a href="T_Avalonia_Controls_AutoCompleteBox">AutoCompleteBox</a>. This type can be either a string or an object.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a>  
Modified text that will be used by the <a href="T_Avalonia_Controls_AutoCompleteBox">AutoCompleteBox</a>.

## See Also


#### Reference
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

