# ContentRootFactory Property


Allows to redefine content root. Can be a custom Window or any ContentControl (Popup hosted).



## Definition
**Namespace:** <a href="N_Avalonia_Dialogs">Avalonia.Dialogs</a>  
**Assembly:** Avalonia.Dialogs (in Avalonia.Dialogs.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public Func<ContentControl>? ContentRootFactory { get; set; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Property ContentRootFactory As Func(Of ContentControl)
	Get
	Set
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member ContentRootFactory : Func<ContentControl> with get, set
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Dialogs/ManagedFileDialogOptions.cs#L20" title="View the source code">View Source</a>



#### Property Value
<a href="https://learn.microsoft.com/dotnet/api/system.func-1" target="_blank" rel="noopener noreferrer">Func</a>(<a href="T_Avalonia_Controls_ContentControl">ContentControl</a>)

## See Also


#### Reference
<a href="T_Avalonia_Dialogs_ManagedFileDialogOptions">ManagedFileDialogOptions Class</a>  
<a href="N_Avalonia_Dialogs">Avalonia.Dialogs Namespace</a>  

