# ResetBehavior Enumeration


Describes the action notified on a clear of a <a href="T_Avalonia_Collections_AvaloniaList_1">AvaloniaList(T)</a>.



## Definition
**Namespace:** <a href="N_Avalonia_Collections">Avalonia.Collections</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public enum ResetBehavior
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Enumeration ResetBehavior
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type ResetBehavior
```
</TabItem>
</Tabs>



## Members
<table>
<tr>
<td>Reset</td>
<td>0</td>
<td>Clearing the list notifies with the <a href="https://learn.microsoft.com/dotnet/api/system.collections.specialized.inotifycollectionchanged.collectionchanged" target="_blank" rel="noopener noreferrer">CollectionChanged</a> event with a <a href="https://learn.microsoft.com/dotnet/api/system.collections.specialized.notifycollectionchangedaction#system-collections-specialized-notifycollectionchangedaction-reset" target="_blank" rel="noopener noreferrer">Reset</a> action.</td>
</tr>
<tr>
<td>Remove</td>
<td>1</td>
<td>Clearing the list notifies with the <a href="https://learn.microsoft.com/dotnet/api/system.collections.specialized.inotifycollectionchanged.collectionchanged" target="_blank" rel="noopener noreferrer">CollectionChanged</a> event with a <a href="https://learn.microsoft.com/dotnet/api/system.collections.specialized.notifycollectionchangedaction#system-collections-specialized-notifycollectionchangedaction-remove" target="_blank" rel="noopener noreferrer">Remove</a> action.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Collections">Avalonia.Collections Namespace</a>  

