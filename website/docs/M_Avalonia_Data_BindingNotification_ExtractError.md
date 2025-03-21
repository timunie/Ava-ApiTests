# ExtractError Method


Gets an exception from an object that may be a <a href="T_Avalonia_Data_BindingNotification">BindingNotification</a>.



## Definition
**Namespace:** <a href="N_Avalonia_Data">Avalonia.Data</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static Object? ExtractError(
	Object? o
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Function ExtractError ( 
	o As Object
) As Object
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static member ExtractError : 
        o : Object -> Object 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Data/BindingNotification.cs#L203" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a></dt><dd>The object.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  
The value.

## Remarks
If *o* is a <a href="T_Avalonia_Data_BindingNotification">BindingNotification</a> then returns the binding notification's <a href="P_Avalonia_Data_BindingNotification_Error">Error</a>. If not, returns the object unchanged.

## See Also


#### Reference
<a href="T_Avalonia_Data_BindingNotification">BindingNotification Class</a>  
<a href="N_Avalonia_Data">Avalonia.Data Namespace</a>  

