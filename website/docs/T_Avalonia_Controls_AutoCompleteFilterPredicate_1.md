# AutoCompleteFilterPredicate&lt;T&gt; Delegate


Represents the filter used by the <a href="T_Avalonia_Controls_AutoCompleteBox">AutoCompleteBox</a> control to determine whether an item is a possible match for the specified text.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public delegate bool AutoCompleteFilterPredicate<T>(
	string? search,
	T item
)

```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Delegate Function AutoCompleteFilterPredicate(Of T) ( 
	search As String,
	item As T
) As Boolean
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type AutoCompleteFilterPredicate = 
    delegate of 
        search : string * 
        item : 'T -> bool
```
</TabItem>
</Tabs>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a></dt><dd>The string used as the basis for filtering.</dd><dt>  T</dt><dd>The item that is compared with the <em>search</em> parameter.</dd></dl>

#### Type Parameters
<dl><dt /><dd>The type used for filtering the <a href="T_Avalonia_Controls_AutoCompleteBox">AutoCompleteBox</a>. This type can be either a string or an object.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  
true to indicate *item* is a possible match for *search*; otherwise false.

## See Also


#### Reference
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

